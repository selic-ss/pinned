import { useState } from 'react'

function App() {
  const [serverMessage, setServerMessage] = useState('아직 백엔드와 연결되지 않았습니다.')

  const checkBackend = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/test')
      const data = await response.json()
      setServerMessage(data.message)
    } catch (error) {
      setServerMessage('연결 실패: 백엔드 서버(8080)가 켜져 있는지 확인하세요.')
      console.error(error)
    }
  }

  return (
    <div style={{ padding: '50px', textAlign: 'center', fontFamily: 'sans-serif' }}>
      <h1>Pinned 풀스택 연결 테스트</h1>
      <button 
        onClick={checkBackend} 
        style={{ padding: '12px 24px', fontSize: '16px', cursor: 'pointer', marginBottom: '20px' }}
      >
        백엔드 서버에 요청 보내기
      </button>
      <h2>{serverMessage}</h2>
    </div>
  )
}

export default App
