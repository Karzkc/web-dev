import path from "path";


// The path module provides utilities for working with file and directory paths in Node.js.

// 1. path.basename: Returns the last portion of a path.
console.log(path.basename('/foo/bar/baz/asdf/quux.html')); // Output: 'quux.html'

// 2. path.dirname: Returns the directory name of a path.
console.log(path.dirname('/foo/bar/baz/asdf/quux.html')); // Output: '/foo/bar/baz/asdf'
//above two same as console.log(__dirname,__filename);
// 3. path.extname: Returns the extension of the path.
console.log(path.extname('/foo/bar/baz/asdf/quux.html')); // Output: '.html'

// 4. path.isAbsolute: Determines if a path is an absolute path.
console.log(path.isAbsolute('/foo/bar')); // Output: true
console.log(path.isAbsolute('foo/bar')); // Output: false

// 5. path.join: Joins all given path segments together.
console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..')); // Output: '/foo/bar/baz/asdf'

// 6. path.normalize: Normalizes the given path, resolving '..' and '.' segments.
console.log(path.normalize('/foo/bar//baz/asdf/quux/..')); // Output: '/foo/bar/baz/asdf'

// 7. path.parse: Returns an object whose properties represent significant elements of the path.
console.log(path.parse('/home/user/dir/file.txt'));
// Output: { root: '/', dir: '/home/user/dir', base: 'file.txt', ext: '.txt', name: 'file' }

// 8. path.relative: Returns the relative path from one path to another.
console.log(path.relative('/data/orandea/test/aaa', '/data/orandea/impl/bbb'));
// Output: '../../impl/bbb'

// 9. path.resolve: Resolves a sequence of paths into an absolute path.
console.log(path.resolve('foo/bar', '/tmp/file/', '..', 'a/../subfile'));
// Output: '/tmp/subfile'

// 10. path.sep: Provides the platform-specific path segment separator.
console.log('foo\\bar\\baz'.split(path.sep)); // Output: [ 'foo', 'bar', 'baz' ]