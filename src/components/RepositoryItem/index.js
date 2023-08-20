// Write your code here
import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {
    avatarUrl,
    name,
    starsCount,
    forksCount,
    issuesCount,
  } = repositoryDetails

  return (
    <li className="repository-item">
      <img src={avatarUrl} alt={name} className="repository-item-image" />
      <h1 className="repository-name">{name}</h1>
      <div className="item-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stars-count-img.png "
          alt="stars"
          className="count-image"
        />
        <p className="count-details">{starsCount} stars</p>
      </div>
      <div className="item-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/forks-count-img.png "
          alt="forks"
          className="count-image"
        />
        <p className="count-details">{forksCount} forks</p>
      </div>
      <div className="item-details-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/issues-count-img.png "
          alt="open issues"
          className="count-image"
        />
        <p className="count-details">{issuesCount} open issues</p>
      </div>
    </li>
  )
}

export default RepositoryItem
