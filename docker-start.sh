#!/bin/bash
echo "\n\nyarn install..."
yarn

echo "\n\nMigrating database..."
node ace migration:run

echo "\n\nStart server..."
yarn dev
