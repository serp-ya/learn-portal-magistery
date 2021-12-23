import * as React from 'react';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import { Container, Row } from 'react-bootstrap';
import { getProfessions } from '../professions';
import { getCurrentUser } from '../user';
import styles from './professions-list.module.scss';

export const ProfessionsList = React.memo(() => {
    const professions = useSelector(getProfessions);
    const currentUser = useSelector(getCurrentUser);

    return (
        <Container>
            <Row>
                <ul>
                    {professions?.map(({ id, name }) => (
                        <li key={id} className={cn({ [styles['current-profession']]: currentUser?.currentProfession === id })}>{name}</li>
                    ))}
                </ul>
            </Row>
        </Container>
    );
});
