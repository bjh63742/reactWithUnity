import { Box, Typography } from '@mui/material';
import React from 'react';
import { Unity, useUnityContext } from 'react-unity-webgl';

export default function Home() {
  const { unityProvider } = useUnityContext({
    loaderUrl: 'build/build.loader.js',
    dataUrl: 'build/build.data',
    frameworkUrl: 'build/build.framework.js',
    codeUrl: 'build/build.wasm',
  });

  return (
    <Box>
      <Typography>유니티 테스트</Typography>
      <Unity unityProvider={unityProvider} style={{ width: '100%' }} />
    </Box>
  );
}
