import * as path from 'path';
import moduleAlias from 'module-alias';

const files = path.resolve(__dirname, '../..');


// Forma de ter alias nos imports (nesse caso de src e test)
moduleAlias.addAliases({
   '@src': path.join(files, 'src'),
   '@test': path.join(files, 'test'),
});
