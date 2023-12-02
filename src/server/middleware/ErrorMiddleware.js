import boom from '@hapi/boom';

export const errorMiddleware = (
	err,
	req,
	res,
	next
) => {
	const {
		output: { payload: error, statusCode },
	} = boom.boomify(err);

	console.log(error);
	res.status(statusCode).json({ error });
	res.status(statusCode).send({
		code: error.code ?? 0,
		details: error.data ?? {},
	});
};