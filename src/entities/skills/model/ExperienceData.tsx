import {ExperienceState} from "./types";

export const ExperienceData:ExperienceState[]=[
    {
        title:'React',
        _skills:[{name:'React.js', url :'react.png'}],
        content:[
            '함수형 컴포넌트를 능숙하게 사용할 수 있습니다.',
            'Reducer, React Hook Form 등 다양한 React 훅을 상황에 맞게 활용 가능합니다.',
            '커스텀 훅을 제작하고 효율적으로 관리할 수 있습니다.',
            '컴포넌트와 훅을 분리해 구조적으로 관리할 수 있습니다.',
            'React-Query를 활용한 api호출 관리를 할 수 있습니다.'
        ]
    },
    {
        title:'Redux',
        _skills:[{name:'Redux', url :'redux.png'},{name:'Redux-Saga', url :'saga.png'}],
        content:[
            'Redux slice 및 상태(state)를 효율적으로 관리할 수 있습니다.',
            'connect 함수를 활용해 Props를 전달할 수 있습니다.',
            'Redux-Saga를 통해 비동기 액션 처리를 할 수 있습니다.',
            'Middleware를 이해하고 상황에 맞게 적용할 수 있습니다.',
            'Redux의 불변성 원칙을 이해하고 있습니다.'
        ]
    },
    {
        title:'JavaScript',
        _skills:[{name:'JavaScript', url:'js.png'}],
        content:[
            'IntersectionObserver을 활용해 무한 스크롤 기능을 구현할 수 있습니다.',
            '내장함수를 활용해 데이터를 효과적으로 처리할 수 있습니다.',
            'Promise를 사용해 비동기 처리를 할 수 있습니다.',
            'ES6 문법을 깊이 이해하고 응용할 수 있습니다.'
        ]
    },
    {
        title:'Html5',
        _skills:[{name:'HTML5', url:'html.png'},{name:'CSS', url:'css.png'}],
        content:[
            '웹표준을 준수하며 시멘틱 마크업 작업이 가능합니다.',
            '반응형 웹 디자인을 구현할 수 있습니다.',
            'styled-component, emotion을 활용할 수 있습니다.',
            'keyframes를 활용해 애니메이션을 제작할 수 있습니다.'
        ]
    },

]