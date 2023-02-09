import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isGiven: false}

  onClickingEmoji = () => {
    this.setState({
      isGiven: true,
    })
  }

  render() {
    const {isGiven} = this.state
    const {resources} = this.props
    const {loveEmojiUrl, emojis} = resources
    return (
      <div>
        {!isGiven ? (
          <div className="app-container">
            <div className="imoji-card-container">
              <h1 className="feedback-title">
                How satisfied are you with our customer support performance?
              </h1>
              <ul className="imoji-list-container">
                {emojis.map(eachItem => (
                  <li className="imoji-item" key={eachItem.id}>
                    <button type="button" className="button">
                      <img
                        src={eachItem.imageUrl}
                        alt={eachItem.name}
                        className="imoji"
                        onClick={this.onClickingEmoji}
                      />
                    </button>
                    <h1 className="imoji-title">{eachItem.name}</h1>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ) : (
          <div className="app-container">
            <div className="imoji-card-container">
              <img src={loveEmojiUrl} className="imoji" alt="love emoji" />
              <h1 className="feedback-title">Thank You!</h1>
              <p className="imoji-title">
                We will use your feedback to improve our customer support
                perfomance
              </p>
            </div>
          </div>
        )}
      </div>
    )
  }
}
export default Feedback
