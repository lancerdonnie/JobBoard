import { render, fireEvent } from '@testing-library/vue';
import { options } from '../__mocks__/setup';
import LandingAdmin from '../src/views/LandingAdmin/LandingAdmin.vue';

describe('Admin Jobs Page', () => {
  test('Admin page renders jobs', () => {
    const { getByText } = render(LandingAdmin, options);
    getByText('Frontend Developer Needed');
  });

  test('new job form opens when the button is clicked', async () => {
    const { getByText } = render(LandingAdmin, options);
    const button = getByText('New Job');
    await fireEvent.click(button);
    getByText('Work Conditions');
  });
});
