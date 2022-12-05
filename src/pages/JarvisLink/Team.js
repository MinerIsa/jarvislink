import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

//Import Components
import SectionTitle from '../../components/Shared/SectionTitle';
import TeamBox from '../../components/Shared/TeamBox';

//Import Images
import image1 from '../../assets/images/client/01.jpg';
import image2 from '../../assets/images/client/02.jpg';
import image3 from '../../assets/images/client/03.jpg';
import image4 from '../../assets/images/client/04.jpg';
import image5 from '../../assets/images/client/08.jpg';

class Team extends Component {
  state = {
    candidates: [
      {
        id: 1,
        image: image4,
        name: 'Corey Graves',
        designation: 'V.P of Sales',
        salary: '2300',
        link: '',
        socialIds: [
          { icon: 'facebook', link: '#' },
          { icon: 'instagram', link: '#' },
          { icon: 'twitter', link: '#' },
          { icon: 'linkedin', link: '#' },
        ],
      },
      {
        id: 2,
        image: image5,
        name: 'Kirby Corkill',
        designation: 'CEO',
        salary: '1950',
        link: '',
        socialIds: [
          { icon: 'facebook', link: '#' },
          { icon: 'instagram', link: '#' },
          { icon: 'twitter', link: '#' },
          { icon: 'linkedin', link: '#' },
        ],
      },
      {
        id: 3,
        image: image1,
        name: 'Sawyer Hopps',
        designation: 'Product Manager',
        salary: '2540',
        link: '',
        socialIds: [
          { icon: 'facebook', link: '#' },
          { icon: 'instagram', link: '#' },
          { icon: 'twitter', link: '#' },
          { icon: 'linkedin', link: '#' },
        ],
      },
      {
        id: 4,
        image: image2,
        name: 'Karen DosSantos',
        designation: 'Customer Support Specialist',
        salary: '2190',
        link: '',
        socialIds: [
          { icon: 'facebook', link: '#' },
          { icon: 'instagram', link: '#' },
          { icon: 'twitter', link: '#' },
          { icon: 'linkedin', link: '#' },
        ],
      },
    ],
  };

  render() {
    return (
      <React.Fragment>
        <section className="section bg-white">
          <Container>
            {/* section title */}
            <SectionTitle
              title="Meet the Team"
              desc="Our team of lighting experts is here to support you on every step of your project."
            />

            <Row>
              {/* teambox */}
              <TeamBox candidates={this.state.candidates} />
            </Row>
          </Container>
        </section>
      </React.Fragment>
    );
  }
}

export default Team;
