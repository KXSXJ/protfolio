export interface Images{
    url:string,
    title:string,
    content:string,
}

interface ProjectState{
    cover:string,
    title:string,
    dev_time :string,
    dev_scale :string,
    sub_title :string,
    content :string[],
    git_link:string,
    use_stack:string,
    readme_url:string,
    images:Images[],
}



export const ProjectData :ProjectState[] =[
    {
        cover:'portfolio.png',
        title:'개발자 강승재의 포트폴리오',
        dev_time :'2024.10.03 ~ 2022.10.15 (2주)',
        dev_scale :'개인 프로젝트',
        sub_title :'개발자 강승재의 포트폴리오',
        content :['시멘틱 마크업을 고려한 태그선정', '디바이스별 화면을 제공하는 반응형 웹', 'gsap을 활용한 스크롤 애니메이션 구현', 'Figma를 활용한 UI/UX설계'],
        git_link:'https://github.com/KXSXJ/portfolio',
        use_stack:'HTML/CSS, JavaScript, React, Gsap, Github',
        readme_url:'https://trusting-booklet-f52.notion.site/120b6025ab278011bdfcf80dfb55cf01?pvs=4',
        images:[]
    },
    {
        cover:'calenJ.png',
        title:'캘린제이 (CalenJ)',
        dev_time :'2024.01.04 ~ 2024.09.04 (8달)',
        dev_scale :'6인 팀 프로젝트',
        sub_title :'캘린더 및 실시간 채팅으로 개인 및 그룹 일정을 관리할 수 있는 사이트',
        content :['웹소켓을 활용한 실시간 채팅', '그룹간 소통을 돕는 투표 및 공지기능', 'fullCalendar를 활용한 일정관리', 'Spring Security, JWT를 활용한 사용자 인증'],
        git_link:'https://github.com/KXSXJ/Calenj',
        use_stack:'JavaScript,TypeScript, React, Redux, React-Query, Spring, Jpa',
        readme_url:'https://trusting-booklet-f52.notion.site/CalenJ-92988c1fec374546bc4a383fe48a9941',
        images:[
            {
                url:'calenJ/view1.png',
                title:'이벤트 태그추가 화면',
                content:'일정을 구분하기 위한 이벤트 태그 추가 ui입니다.'
            },
            {
                url:'calenJ/view2.png',
                title:'개인일정 등록',
                content:'개인 일정, todoList, 및 반복 이벤트를 등록할 수 있는 화면입니다.'
            },
            {
                url:'calenJ/view3.png',
                title:'등록된 반복일정',
                content:'fullCalendar의 rrule를 활용하여 반복일정을 구현했습니다.'
            },
            {
                url:'calenJ/view4.png',
                title:'친구요청 화면',
                content:'친구요청 화면입니다. 웹소켓을 활용하여 실시간으로 친구에게 요청할 수 있는 기능을 구현했습니다.'
            },
            {
                url:'calenJ/view5.png',
                title:'친구등록 완료화면',
                content:'웹소켓을 활용한 온라인 여부 및 개인채팅을 구현햇습니다.'
            },
            {
                url:'calenJ/view6.png',
                title:'그룹일정 화면',
                content:'드래그로 이벤트 수정이 가능하며 그룹 일정에 참여하면 자동으로 캘린더에 일정이 추가됩니다.'
            },
            {
                url:'calenJ/view7.png',
                title:'그룹 일정 위치지정 화면',
                content:'Naver Map을 활용한 위치등록 및 마커기능을 활용하여 위치를 등록합니다.'
            },
            {
                url:'calenJ/view8.png',
                title:'그룹일정 참여 후 개인 캘린더 화면',
                content:'그룹 일정 참여 이후 캘린더에 추가된 화면'
            },
            {
                url:'calenJ/view9.png',
                title:'화면 크기에따른 ui조정 및 투표등록',
                content:'화면 크기에 따라 서브뷰의 배치가 변경되며 조절이 가능합니다 \n' +
                    '투표를 등록하면 그룹 채팅으로 알람이 가며 투표가 가능합니다.'
            },
            {
                url:'calenJ/view10.png',
                title:'이미지 전송 화면',
                content:'이미지 파일을 드래그하여 전송할 수 있습니다. 전송된 이미지는 그리드 뷰로 보여집니다.'
            }
        ]
    },
    {
        cover:'vws.png',
        title:'VWS(Vertical Working Simulator)',
        dev_time :'2022.06.20 ~ 2022.10.04 (4달)',
        dev_scale :'6인 팀 프로젝트',
        sub_title :'VR 콘텐츠와 웹사이트를 활용한 자격증 필기/실기 검증 테스트',
        content :['VR을 통한 모의실기 시험 테스트 기능', '웹, 모바일을 통한 필기 일정 및 모의시험 기능', '랭킹을 통한 경쟁 시스템', '자격증 발급 및 플레이 영상 기록'],
        git_link:'https://github.com/KXSXJ/Mars-Web',
        use_stack:'HTML/CSS, JavaScript,  React, Yup-Schema, Unity, Spring ',
        readme_url:'https://trusting-booklet-f52.notion.site/VWS-Vertical-Working-Simulator-94b95334421d457b8e6d3bd9bd2860ea?pvs=4',
        images:[
            {
                url:'vws/view1.png',
                title:'메인 화면',
                content:'원하는 컨텐츠를 선택하는 화면입니다.',
            },
            {
                url:'vws/view2.png',
                title:'로그인 화면',
                content:'formik를 활용한 폼형식을 관리합니다.',
            },
            {
                url:'vws/view3.png',
                title:'기능사 일정공지 화면',
                content:'자격증에대한 시간정보를 제공합니다.',
            },
            {
                url:'vws/view4.png',
                title:'VR가이드 화면',
                content:'플레이 방법을 알려주는 가이드 동영상입니다.',
            },
            {
                url:'vws/view5.png',
                title:'나의 자격확인 화면',
                content:'게임 내의 모바일 자격증 및 자격정보를 조회할 수 있습니다.',
            },
            {
                url:'vws/view6.png',
                title:'자격정보 조회',
                content:'나의 자격 정보를 조회하는 화면입니다. 필기 및 실기를 모두 합격하면 자격증이 발급됩니다.',
            },
            {
                url:'vws/view7.png',
                title:'나의 랭킹화면',
                content:'VR게임 내의 점수를 통해 랭킹을 조회하는 화면입니다.',
            },
            {
                url:'vws/view8.png',
                title:'필기 모의고사 선택화면',
                content:'기출 문제를 통해 사용자의 역량을 확인할 수 있는 기출 모의고사의 선택화면입니다.',
            },
            {
                url:'vws/view9.png',
                title:'모의고사 모드 선택화면',
                content:'모의고사 모드를 선택할 수 있는 화면입니다.',
            },
            {
                url:'vws/view10.png',
                title:'참여자 정보 입력화면',
                content:'시험 참여자의 정보를 등록하는 화면입니다.',
            },
            {
                url:'vws/view11.png',
                title:'모의시험 테스트모드',
                content:'테스트 모드로 기출문제를 제공합니다.',
            },
            {
                url:'vws/view12.png',
                title:'모의테스트 결과화면',
                content:'모의 테스트의 결과 UI입니다.',
            },
        ]
    }
]