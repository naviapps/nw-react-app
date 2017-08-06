#!/usr/bin/env node

'use strict';

const program = require('commander');
const packageConfig = require('../package.json');

program
  .version(packageConfig.version)
  .description('nw-react-scripts')
  .command('start', 'start')
  .command('build', 'build')
  .command('test', 'test')
  .parse(process.argv);
