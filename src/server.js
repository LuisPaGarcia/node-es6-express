import app from './init';
import { index, usuarios, def } from './methods';

app.get('/', index);
app.get('/usuarios', usuarios);

app.get('*', def);

app.listen(8989, () => {
	console.log('listening on http://localhost:8989');
});
