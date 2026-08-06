import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    // Surface the real error in the console instead of failing silently.
    // eslint-disable-next-line no-console
    console.error('App crashed:', error, info?.componentStack);
  }

  render() {
    if (this.state.error) {
      return (
        <div
          style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            gap: '12px',
            background: '#0b0d11',
            color: '#eef0f4',
            fontFamily: 'ui-monospace, monospace',
            padding: '24px',
            textAlign: 'center',
          }}
        >
          <div style={{ fontSize: '18px', fontWeight: 700 }}>Something broke while rendering.</div>
          <div style={{ color: '#aeb4c0', fontSize: '13px', maxWidth: '640px' }}>
            {String(this.state.error?.message || this.state.error)}
          </div>
          <div style={{ color: '#6b7280', fontSize: '12px' }}>
            Open the browser console (F12) for the full stack trace.
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
