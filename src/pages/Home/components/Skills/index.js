import React from 'react';
import * as S from './styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink,faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import javascript from '../../../../assets/icons/javascript.png'

function Skills() {
    return (
        <S.SkillsContainer>
            <S.SkillsWrapper>
                <S.TitleWrapper>
                    skills
                </S.TitleWrapper>
                <S.TabWrapper>
                    <Tabs>
                        <TabList>
                        <Tab>languages</Tab>
                        <Tab>frameworks/libs</Tab>
                        <Tab>design</Tab>
                        <Tab>tools</Tab>
                        </TabList>

                        <TabPanel>
                            <S.CardWrapper>
                                <S.CardItem>
                                    <S.ImagesWrapper>
                                        <img src={javascript} alt="" className="heroImg"/>
                                    </S.ImagesWrapper>
                                    <S.TextWrapper>
                                        <h3>JS ES6</h3>
                                    </S.TextWrapper>
                                </S.CardItem>
                                <S.CardItem>
                                    <S.ImagesWrapper>
                                        <img src={javascript} alt="" className="heroImg"/>
                                    </S.ImagesWrapper>
                                    <S.TextWrapper>
                                        <h3>HTML</h3>
                                    </S.TextWrapper>
                                </S.CardItem>
                                <S.CardItem>
                                    <S.ImagesWrapper>
                                        <img src={javascript} alt="" className="heroImg"/>
                                    </S.ImagesWrapper>
                                    <S.TextWrapper>
                                        <h3>CSS</h3>
                                    </S.TextWrapper>
                                </S.CardItem>
                            </S.CardWrapper>
                        </TabPanel>
                        <TabPanel>
                        <h2>Any content 2</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>Any content 3</h2>
                        </TabPanel>
                        <TabPanel>
                        <h2>Any content 4</h2>
                        </TabPanel>
                    </Tabs>
                </S.TabWrapper>

            </S.SkillsWrapper>

        </S.SkillsContainer>
    )
}

export default Skills;