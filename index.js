const fastify = require('fastify')();
const mjml = require('mjml');

fastify.post('/', async function (request) {
    if (request.body === undefined) {
        return { error: 'No body provided' };
    }

    if (typeof request.body.mjml === 'undefined' || request.body.mjml === null) {
        return {};
    }

    let result = mjml(request.body.mjml);

    if (Object.keys(result.errors).length) {
        Object.keys(result.errors).forEach((key) => {
            delete result.errors[key].formattedMessage;
        });
    }

    return result;
});

const start = async () => {
    try {
        console.log('Starting server at port 3000');
        await fastify.listen({ port: 3000 })
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()