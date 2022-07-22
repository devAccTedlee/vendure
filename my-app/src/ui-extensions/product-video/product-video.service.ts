// product-video.service.ts
import { Injectable, OnModuleInit } from '@nestjs/common';
import { JobQueue, JobQueueService, ID, Product, TransactionalConnection } from '@vendure/core';
import { transcode } from 'third-party-video-sdk';

@Injectable()
class ProductVideoService implements OnModuleInit { 
    
  private jobQueue: JobQueue<{ productId: ID; videoUrl: string; }>;
  
  constructor(private jobQueueService: JobQueueService,
              private connection: TransactionalConnection) {}

  async onModuleInit() {
    this.jobQueue = await this.jobQueueService.createQueue({
      name: 'transcode-video',
      process: async job => {
        // Here we define how each job in the queue will be processed.
        // In this case we call out to some imaginary 3rd-party video
        // transcoding API, which performs the work and then
        // returns a new URL of the transcoded video, which we can then
        // associate with the Product via the customFields.
        const result = await transcode(job.data.videoUrl);
        await this.connection.getRepository(Product).save({
          id: job.data.productId,
          customFields: {
            videoUrl: result.url,
          },
        });
        // The value returned from the `process` function is stored as the "result"
        // field of the job (for those JobQueueStrategies that support recording of results).
        //  
        // Any error thrown from this function will cause the job to fail.  
        return result
      },
    });
  }

  transcodeForProduct(productId: ID, videoUrl: string) { 
    // Add a new job to the queue and immediately return the
    // job itself.
    return this.jobQueue.add({ productId, videoUrl }, { retries: 2 });
  }
}