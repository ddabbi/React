import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react';    //일부분만 갱신
// 화면에 보여줄 값을 '변수'에 보관하지 않고 'state'에 보관
// 변수는 값이 변경되어도 화면에 변경되지 않지만, useState라는 것을 사용하면 값이 바ㅏ뀌면 화면도 따라서 바뀜(데이터바인딩)
// 따라서ㅓ, 변경될만한 값은 useStae로 보관. 변경이 안될 값은 변수에 보관


// html코드를 작성하려면 return()안에 작성
// css를 사용하려면 import

// 리액트: 변수가 바뀌면 화면이 바뀌는 atate(웹페이지를 다시 불러올 필요가 없음)

function App() {
  let 변수 = '블로그 글목록'
  let [value, setValue] = useState('서버에서 실시간으로 받는 값')
  let [title, setTitle] = useState(['제목1', '제목2', '제목3', '제목4'])
  let [dateTime, setDateTime] = useState(['2024.04.13','2024.04.12','2024.03.29','2024.02.28'])
  // html안에서 사용하려면{}필요
  let [score, setScore] = useState([0,0,0,0])
  let [modal, setModal] = useState(false)
  let [curIdx,setCurIdx] = useState(0)

  return (
    <div className="App" >
      <div className='black-nav'>
        <img src={logo} width={'100px'} alt=""></img>
        <h4 style={{color:'yellowgreen', fontSize: '20px'}}>{value}</h4>
      </div>
      



      <div className='list'>
      <h4 onClick={() =>{
        setModal(true)
      }}>{title[0]} <span onClick={(e) =>{
        e.stopPropagation()
        setScore(() =>{
          let src = [...score]
          src[0] += 1
          return src
        })
      }}>💖</span>{score[0]}</h4>
      <p>2024.04.13 작성</p>
      </div>

      <div className='list'>
      <h4 onClick={() =>{
        setModal(true)
      }}>{title[1]} <span onClick={(e) =>{
        e.stopPropagation()
        setScore(() =>{
          let src = [...score]
          src[1] += 1
          return src
        })
      }}>💖</span>{score[1]}</h4>
      <p>2024.04.13 작성</p>
      </div>

      <div className='list'>
      <h4 onClick={() =>{
        setModal(true)
      }}>{title[2]} <span onClick={(e) =>{
        e.stopPropagation()
        setScore(() =>{
          let src = [...score]
          src[2] += 1
          return src
        })
      }}>💖</span>{score[2]}</h4>
      <p>2024.04.13 작성</p>
      </div>

      <div className='list'>
      <h4 onClick={() =>{
        setModal(true)
      }}>{title[3]} <span onClick={(e) =>{
        e.stopPropagation()
        setScore(() =>{
          let src = [...score]
          src[3] += 1
          return src
        })
      }}>💖</span>{score[3]}</h4>
      <p>2024.04.13 작성</p>
      </div>

      modal == true ? <Modal idx={curIdx} title={title} date={dateTime}/> : null
      

    </div>
  );
}

export default App;

// Modal 컴포넌트 분리
// 코드가 길어지면 별도의 함수로 분리해서 '컴포넌트'로 만들어준다.
// return() 안에 html태그를 작성
// 사용하고자 하는 곳에 <함수명/>
function Modal(props){
  return(
    <>
      <div className='modal'>
        <h4>{props.title[props.idx]}</h4>
        <p>{props.date[props.idx]}</p>
        <p>상세 내용</p>
      </div>
    </>
  )
}

// 리액트 빌드(리액트앱 베포)
// npm run build
// build라는 폴더가 생성되고 그 안에 내용들을 베포하면 됨
