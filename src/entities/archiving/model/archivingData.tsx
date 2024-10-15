
interface ArchivingState{
    title:string,
    target:string,
    imageUrl:string,
    url:string,
    list:string[],
}
export const archivingData :ArchivingState[]=[
    {
        title:'소스코드 저장소',
        imageUrl:'github.png',
        target:"GitHub",
        url:"https://github.com/KXSXJ/Calenj",
        list:["프로젝트 및 코딩테스트 코드", "fork, clone을 통한 협업"],
    },
    {
        title:'학습한 내용을 기록하는 공간',
        imageUrl:'notion.png',
        target:"Notion",
        url:"https://www.notion.so/6812f319868845baba314aac15afbe08?pvs=4",
        list:["학습내용 기록 및 정리", "학습할 내용 스크랩 및 저장"],
    }
]