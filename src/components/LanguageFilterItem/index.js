// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, setActiveLanguageFilterId, isActive} = props
  const {id, language} = languageFilterDetails
  const buttonClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguageFilterItem = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li className="language-filter-item">
      <button
        className={buttonClassName}
        type="submit"
        onClick={onClickLanguageFilterItem}
      >
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
