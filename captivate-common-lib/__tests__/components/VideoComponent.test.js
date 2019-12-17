import React from 'react';
import {render} from '@testing-library/react';

import {VideoComponent} from '../../src';
import {videoData, errorData} from '../../public/data/videoJSON';

test('Loads and dispay Video Component props', () => {
    const {getByTestId} = render(<VideoComponent {...videoData} />);
    expect(getByTestId('videoHeader').innerHTML).toBe(videoData.data.header);
    expect(getByTestId('videoTitle').innerHTML).toBe(videoData.data.title);
    expect(getByTestId('videoDescription').innerHTML).toContain(videoData.data.description);
});

test('should handle Error and Warning', () => {
    const {getByTestId} = render(<VideoComponent {...errorData} />);

    expect(getByTestId('errorCode').innerHTML).toBe(errorData.error.code);
    expect(getByTestId('errorMessage').innerHTML).toBe(errorData.error.message);

    expect(getByTestId('warningMessage').innerHTML).toBe(errorData.warning.warningMessage);
});
