#!/usr/bin/env node

'use strict';

const program = require('commander');
const packageConfig = require('../package.json');

program
  .command('start', 'start')
  .command('build', 'build')
  .command('test', 'test')
  .version(packageConfig.version)
  .parse(process.argv);
