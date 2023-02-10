import * as path from  'path';
import moduleALias from 'module-alias'

const files = path.resolve(__dirname, '../..')

moduleALias.addAliases({
'@src': path.join(files, 'src'),
'@test': path.join(files,'test')
})