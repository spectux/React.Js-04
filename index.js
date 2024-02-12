const Notification = ({type, message}) => {
  let iconUrl
  let bgColor

  switch (type) {
    case 'primary':
      iconUrl = 'https://assets.ccbp.in/frontend/react-js/primary-icon-img.png'
      bgColor = '#0b69ff'
      break
    case 'success':
      iconUrl = 'https://assets.ccbp.in/frontend/react-js/success-icon-img.png'
      bgColor = '#2dca73'
      break
    case 'warning':
      iconUrl = 'https://assets.ccbp.in/frontend/react-js/warning-icon-img.png'
      bgColor = '#ffb800'
      break
    case 'danger':
      iconUrl = 'https://assets.ccbp.in/frontend/react-js/danger-icon-img.png'
      bgColor = '#ff0b37'
      break
    default:
      break
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        padding: '16px',
        borderRadius: '8px',
        backgroundColor: bgColor,
        marginBottom: '16px',
      }}
    >
      <img
        src={iconUrl}
        alt={type}
        style={{marginRight: '16px', width: '24px', height: '24px'}}
      />
      <p style={{margin: 0, fontFamily: 'Roboto', color: '#ffffff'}}>
        {message}
      </p>
    </div>
  )
}

const element = (
  <div
    style={{backgroundColor: '#0f172a', minHeight: '100vh', padding: '24px'}}
  >
    <h1 style={{fontFamily: 'Roboto', color: '#ffffff', textAlign: 'center'}}>
      Notifications
    </h1>
    <Notification type='primary' message='This is a primary notification' />
    <Notification type='success' message='This is a success notification' />
    <Notification type='warning' message='This is a warning notification' />
    <Notification type='danger' message='This is a danger notification' />
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
