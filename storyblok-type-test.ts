import { ISbStory } from '@storyblok/react/rsc'

// This should already raise an error during compilation since an empty object should not be assignable to an IsbStory type. E.g. the data property is missing
const testStory: ISbStory = {}