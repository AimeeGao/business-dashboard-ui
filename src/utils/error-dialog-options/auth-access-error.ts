export function getAuthAccessError (): DialogOptionsI {
  return {
    buttons: [
      {
        onClick: useBcrosNavigate().goToBcrosDashboard,
        onClickClose: true,
        text: 'OK'
      }
    ],
    onClose: useBcrosNavigate().goToBcrosDashboard,
    text: '',
    title: 'Business Dashboard Access Denied'
  }
}
