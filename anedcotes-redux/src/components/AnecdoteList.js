import React from 'react'
import { connect } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const Anecdote = ({ anecdote, handleClick }) => {
    return (
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={handleClick}>vote</button>
            </div>
        </div>
    )
}

const AnecdoteList = (props) => {

    return (

        <div>
            {props.anecdotes.map(anecdote =>
                <Anecdote
                    key={anecdote.id}
                    anecdote={anecdote}
                    handleClick={async () => {
                        props.vote(anecdote)
                        props.setNotification(`you voted '${anecdote.content}'`, 5000)
                    }
                    }
                />
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes.sort((a, b) => a.votes - b.votes)
            .filter(anecdote => anecdote.content.toLowerCase().includes(state.filter))
    }
}

const mapDispatchToProps = {
    vote,
    setNotification,
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)