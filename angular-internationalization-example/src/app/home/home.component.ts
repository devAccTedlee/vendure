import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    title = "결제 테스트";
    desc1 = "테스트 화면입니다.";
    desc2 = "아래 버튼을 눌러 결제 또는 본인인증 테스트를 진행해주세요."

    constructor() {
    }

    ngOnInit(): void {
    }

}
