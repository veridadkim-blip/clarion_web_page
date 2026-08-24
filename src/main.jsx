import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    console.error("CLARION App Error Caught:", error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '40px', background: '#07152B', color: '#fff', fontFamily: 'sans-serif', minHeight: '100vh' }}>
          <h1 style={{ color: '#37B7FF', fontSize: '24px', fontWeight: 'bold' }}>㈜클라리온 웹사이트</h1>
          <p style={{ marginTop: '10px', color: 'rgba(255,255,255,0.8)' }}>앱 초기화 중 오류가 감지되어 표시 방지 모드로 복원되었습니다.</p>
          <pre style={{ marginTop: '20px', padding: '15px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '12px', overflow: 'auto' }}>
            {this.state.error?.toString()}
          </pre>
        </div>
      )
    }

    return this.props.children
  }
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
)
