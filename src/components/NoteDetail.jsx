import {showFormattedDate} from '../utils/index';
import PropTypes from 'prop-types';

function NoteDetail({title, body, createdAt}) {
    return (
      <div className='detail-page'>
      <h2 className="detail-page__title">{ title }</h2>
      <h5 className="detail-page__createdAt">{showFormattedDate(createdAt)}</h5>
      <p className="detail-page__body">{body}</p>
      </div>
    )
  }

NoteDetail.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
};



  export default NoteDetail;