import { Col, Row } from 'antd';
import AnnCard from '../../sharedComponents/annCard/annCard';

export default function AnnouncementsSection() {
  return (
    <div className="ann-section">
      <h3>Announcements</h3>
      <p>Lorem Ipsum is simply dummy text of the printing</p>

      <Row gutter={[24, 24]} justify="space-between">
        {[21, 2, 3].map(() => {
          return (
            <Col>
              <AnnCard />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}
