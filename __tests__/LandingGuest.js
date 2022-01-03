import { render, fireEvent } from '@testing-library/vue';
import { options } from '../__mocks__/setup';
import LandingGuest from '../src/views/LandingGuest/LandingGuest.vue';

describe.only('Guest Jobs Page', () => {
  test('Guest page renders jobs', () => {
    const { getByText } = render(LandingGuest, options);
    getByText('Frontend Developer Needed');
  });

  test('job application form opens when the button is clicked', async () => {
    const { getAllByText, getByText } = render(LandingGuest, options);
    const [button] = getAllByText('see more');
    await fireEvent.click(button);
    setTimeout(async () => {
      const button2 = getByText('Apply Via Find Job');
      await fireEvent.click(button2);
      getByText('Submit Application');
    }, 500);
  });
});
