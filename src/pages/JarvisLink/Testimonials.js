import React from 'react';
import { Container } from 'reactstrap';

//Import Containers
import SectionTitle from '../../components/Shared/SectionTitle';
import ReviewsSlider from '../../components/Shared/ReviewsSlider';
import { reviews } from '../../common/data';

const Testimonials = () => {
  return (
    <React.Fragment>
      <Container>
        {/* section title */}
        <SectionTitle title="Testimonials" desc="Hear from Jarvis Link users" />

        {/* clients slider */}
        <ReviewsSlider reviews={reviews} colClass="mt-4" />
      </Container>
    </React.Fragment>
  );
};

export default Testimonials;
