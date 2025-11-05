'use client'

import { useEffect } from 'react'
import posthog from 'posthog-js'
import { PostHogProvider as PHProvider } from 'posthog-js/react'

export function PostHogProvider({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined' && !posthog.__loaded) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        person_profiles: "always",
        capture_pageview: true,
        capture_pageleave: true,
        disable_session_recording: false,
        session_recording: {
          maskAllInputs: false,
          recordCrossOriginIframes: true,
        },
      });
    }
  }, []);

  return <PHProvider client={posthog}>{children}</PHProvider>;
}