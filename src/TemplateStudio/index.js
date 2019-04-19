import React, { PureComponent } from 'react';
import styled from 'styled-components';
import TemplateLibrary from 'cicero-ui';
import 'semantic-ui-css/semantic.min.css';
import { connect } from 'react-redux';

import { pushTemplatesToStore } from '../sagas';

// const action = type => store.dispatch({type})

const mockUpload = () => { console.log('upload'); };
const mockImport = () => { console.log('import'); };
const mockAddTemp = () => { console.log('addTemp'); };
const mockAddToCont = (input) => { console.log('addToCont: ', input); };

const TLWrapper = styled.div`
  height: 700px;
  width: 485px;
  position: fixed;
  bottom: 0;
  right: 0;
  border: 2px solid #F9F9F9;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
    background: transparent;
  }
`;


class TemplateStudio extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      upload: mockUpload,
      import: mockImport,
      addTemp: mockAddTemp,
      addToCont: mockAddToCont,
    };
  }

  render() {
    return (
      <div>
        <TLWrapper>
          <TemplateLibrary
            templates={this.props.templates}
            upload={this.state.upload}
            import={this.state.import}
            addTemp={this.state.addTemp}
            addToCont={this.state.addToCont} 
            outputTemplates={pushTemplatesToStore}
          />
        </TLWrapper>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    templates: state.templates
  };
};

const mapDispachToProps = dispatch => {
  return {
    // fetchLibrary: () => dispatch({ type: "FETCH_TEMPLATE_LIBRARY" })
  };
};

export default connect(
  mapStateToProps, 
  mapDispachToProps
)(TemplateStudio);