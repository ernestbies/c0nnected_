const statusList = {
    fetch: {
        no: 0,
        code: 'FETCHING',
        message: 'Fetching data.',
        color: 'gray',
        description: 'Data is retrieved from an external server.'
    },
    connect: {
        no: 1,
        code: 'CONNECTED',
        message: 'Connected with server.',
        color: '#F8F8FF',
        description: 'Connection to an external server has been established.'
    },
    solve: {
        no: 2,
        code: 'SOLVED',
        message: 'Correctly answered.',
        color: '#228B22',
        description: 'Puzzle was solved correctly.'
    },
    send: {
        no: 3,
        code: 'SENT',
        message: 'Message sent.',
        color: 'green',
        description: 'Message was sent successfully and posted on the Hall of Fame board.'
    },
    error_connect: {
        no: 4,
        code: 'ERROR',
        message: 'Fetching error.',
        color: 'red',
        description: 'There was a problem connecting with server.'
    },
    error_solve: {
        no: 5,
        code: 'ERROR',
        message: 'Wrong answer.',
        color: 'red',
        description: 'Incorrect answer was given while solving the puzzle.'
    },
    error_send: {
        no: 6,
        code: 'ERROR',
        message: 'Sending error.',
        color: 'red',
        description: 'There was a problem sending the message (data validation problem).'
    }
};

export default statusList;
