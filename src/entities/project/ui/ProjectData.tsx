interface ProjectState{
    cover:string,
    title:string,
    dev_time :string,
    dev_scale :string,
    sub_title :string,
    content :string[],
    git_link:string,
    use_stack:string,
}

export const ProjectData :ProjectState[] =[
    {
        cover:'calenJ.png',
        title:'캘린제이 (CalenJ)',
        dev_time :'2024.01.04 ~ 2024.09.04 (8달)',
        dev_scale :'6인 팀 프로젝트',
        sub_title :'캘린더 및 실시간 채팅으로 개인 및 그룹 일정을 관리할 수 있는 사이트',
        content :['웹소켓을 활용한 실시간 채팅', '그룹간 소통을 돕는 투표 및 공지기능', 'fullCalendar를 활용한 일정관리', 'Spring Security, JWT를 활용한 사용자 인증'],
        git_link:'https://github.com/KXSXJ/Calenj',
        use_stack:'JavaScript,TypeScript, React, Redux, React-Query, Spring, Jpa',
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
    }
]