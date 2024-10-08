
export interface Skill_Detail{
    name:string,
    url:string,
}
export interface Skill_List{
    _skills : Skill_Detail[]
}
export interface SkillState{
    title :string,
    lineNum:number,
    list : Skill_List[]
}