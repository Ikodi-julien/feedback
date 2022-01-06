import React from "react";
import PropTypes from "prop-types";
import { Form } from "react-final-form";
import Tabs from "../shared/Tabs";
import Button from "../Button/Button";
import "./wizard.scss";

export default class Wizard extends React.Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };
  static Page = ({ children }) => children;

  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      values: props.initialValues || {},
    };
  }

  next = (values) =>
    this.setState((state) => ({
      page: Math.min(state.page + 1, this.props.children.length - 1),
      // This is a trick to re render after user data fetch, it works so...
      values: {
        ...values,
        name: this.props.initialValues.name,
        email: this.props.initialValues.email,
      },
    }));

  previous = () =>
    this.setState((state) => ({
      page: Math.max(state.page - 1, 0),
    }));

  validate = (values) => {
    const activePage = React.Children.toArray(this.props.children)[
      this.state.page
    ];
    return activePage.props.validate ? activePage.props.validate(values) : {};
  };

  handleSubmit = (values) => {
    const { children, onSubmit } = this.props;
    const { page } = this.state;
    const isLastPage = page === React.Children.count(children) - 1;
    if (isLastPage) return onSubmit(values);
    this.next(values);
  };

  render() {
    const { children } = this.props;
    const { page, values } = this.state;
    const activePage = React.Children.toArray(children)[page];
    const isLastPage = page === React.Children.count(children) - 1;

    return (
      <section>
        <Tabs activeTab={page} />
        <Form
          initialValues={values}
          validate={this.validate}
          onSubmit={this.handleSubmit}
        >
          {({ handleSubmit, submitting, values }) => (
            <form onSubmit={handleSubmit}>
              <div className="inputwrapper">{activePage}</div>
              <hr />
              <div className="buttons">
                {page > 0 && (
                  <Button type="button" onClick={this.previous}>
                    ← Précédent
                  </Button>
                )}
                {!isLastPage && <Button type="submit">Suivant →</Button>}
                {isLastPage && (
                  <Button color="green" type="submit" disabled={submitting}>
                    Envoyer
                  </Button>
                )}
              </div>
              <p>
                <em>
                  Réponses modifiables tant que le formulaire n'est pas validé
                </em>
              </p>
              <hr />

              {isLastPage && (
                <div className="inputwrapper">
                  {" "}
                  <h3>Récapitulatif des données qui seront transmises :</h3>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                  <hr />
                </div>
              )}
            </form>
          )}
        </Form>
      </section>
    );
  }
}
