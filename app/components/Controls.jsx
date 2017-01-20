var React = require('react');

var Controls = React.createClass({
    propTypes: {
        countdownStatus: React.PropTypes.string.isRequired,
        onStatusChange: React.PropTypes.func.isRequired
    },
    onStatusChange: function(newStatus) {
        return () => {
            this.props.onStatusChange(newStatus);
        }
    },
    render: function() {
        var {countdownStatus} = this.props;
        var renderStartStopButton = () => {
            if(countdownStatus === 'started') {
                return <button className="button secondary">Pause</button>
            }
            else if(countdownStatus === 'paused') {
                return <button className="button primary">Start</button>
            }
        };

        return (
            <div>
                {renderStartStopButton()}
                <button className="button alert hollow">Clear</button>
            </div>
        )
    }
});

module.exports = Controls;