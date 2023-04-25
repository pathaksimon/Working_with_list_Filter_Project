import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, changeinstyle} = props
  const {tabId, displayText} = tabDetails

  const onClickTabItem = () => {
    updateActiveTabId(tabId)
  }

  const buttonstyle = () => {
    if (changeinstyle === true) {
      return 'active-tab-btn'
    }
    return ''
  }

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${buttonstyle()}`}
        onClick={onClickTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
