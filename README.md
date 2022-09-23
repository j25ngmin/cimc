ue
    |       `-- InquiryWrite.vue
    |   `-- counselor
    |       |-- AnswerView.vue
    |       |-- AnswerView.vue
    |       `-- Login.vue


* 화면 명세 (* 로그인필요)
1. 고객 사용 페이지
고객은 문의 목록 조회 페이지, 문의 작성 페이지 총 2페이지로 구성되어 있다.

1) 문의 목록 조회 페이지
http://localhost:7070/api/v1/inquiryView
2) 문의 작성 페이지
http://localhost:7070/api/v1/inquiryWrite

2. 상담사 사용 페이지 (*)
상담사는 상담사 로그인 페이지, 미답변 목록 조회 페이지, 답변 작성 페이지 총 3페이지로 구성되어 있다.
로그인을 필수로 요구한다.

1) 상담사 로그인 페이지
http://localhost:7070/api/v1/counselor/login
2) 미답변 목록 조회 페이지
http://localhost:7070/api/v1/counselor/answerView
3) 답변 작성 페이지
http://localhost:7070/api/v1/counselor/answerWrite/{inquirySeq}


### 실행 방법
0. 사용자 로그인 정보 (비밀번호는 0000 으로 통일)
    * 고객 : muzi, con, apeach, jayg, frodo, neo, 
    * 상담사 : tube, ryan, chunsik
1.  등록된 문의 목록을 조회합니다.
    * 호출 URL : http://localhost:7070/api/v1/inquiryView
    * 상태코드는 001(문의등록), 002(상담사접수), 003(답변등록) 구성
2.  문의등록 버튼을 클릭하여 문의를 등록합니다.
    * 호출 URL : http://localhost:7070/api/v1/inquiryWrite
    * 필수요건 : 고객ID 입력은 고객으로 등록된 사용자이어야 함, 제목, 문의내용 필수 입력.
3.  문의 접수 및 답변 등록을 위해 상담사 로그인 합니다.
    * 호출 URL : http://localhost:7070/api/v1/counselor/login
    * 필수요건 : 상담사로 등록된 사용자이어야 함.
4. 로그인 한 상담사에게 문의 접수 및 답변 등록된 문의를 조회합니다.
    * 호출 URL : http://localhost:7070/api/v1/counselor/answerView
    * 필수요건 : 본인이 접수한 문의만 답변을 등록할 수 있음.
               새로운 문의를 접수하기 위해서 검색조건 활용.
               한번 접수된 문의는 재접수 할 수 없음.
    * 상태코드는 001(문의등록), 002(상담사접수), 003(답변등록) 구성
5. 상담사가 접수한 문의에 대해 답변을 작성합니다.
    * 호출 URL : http://localhost:7070/api/v1/counselor/answerWrite/{inquirySeq}
    * 필수요건 : 이미 완료된 문의는 답변 등록을 할 수 없음.
               답변 내용 필수 입력.


### 문제 해결 전략
- vue 개념 습득
- 요구사항에 대한 높은 이해도
- JWT, session 통한 로그인 인증 처리
- 구조화된 API 설계로 심플한 frontend 처리 가능
