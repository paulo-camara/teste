import request from 'superagent';

class Request {
    SendRequestPost(route, payload, success, fail) {
        request.post(route)
            .send(payload)
            .set('accept', 'json')
            .end((err, res) => {
                if (err) {
                    return fail(err)
                }

                success(res)
            })

    }
}

export default Request;