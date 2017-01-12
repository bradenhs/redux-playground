import { connect } from 'react-redux';
import { setVisibilityFilter } from '~/actions';
import { Link } from '~/components/Link';

const mapStateToProps = (state: any, ownProps: any) => { // tslint:disable-line
  return { active: ownProps.filter === state.visibilityFilter };
};

const mapDispatchToProps = (dispatch: Function, ownProps: any) => { // tslint:disable-line
  return {
    onClick: () => dispatch(setVisibilityFilter(ownProps.filter)),
  };
};

export const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);
