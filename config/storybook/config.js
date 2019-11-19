import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
const req = require.context('../../src/shared/components', true, /.stories.tsx$/);

addDecorator(withKnobs);

addParameters({
    viewport: {
        viewports: INITIAL_VIEWPORTS
    }
});

function loadStories() {
    req.keys().forEach(req);
}

configure(loadStories, module);
