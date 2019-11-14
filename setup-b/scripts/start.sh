#!/bin/bash

http-server ./libs -p 29090 &
browser-sync start --server 'src' --files 'src' -c 'bs-config.js' --directory &
wait;



