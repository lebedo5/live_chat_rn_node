import React, { FC, memo } from 'react';
import { View } from 'react-native';
import { useStyle } from './assets/under-construction-style';
import { Text } from './text/Text';
import Layout from './Layout';

type Props = {
    pageName: string;
};

const UnderConstruction: FC<Props> = ({ pageName }) => {
    const styles = useStyle();
    return (
        <Layout>
            <View style={styles.container}>
                <Text style={styles.underConstructionText}>{pageName}</Text>
                <View style={styles.constructionWorksContainer}>
                    <Text style={styles.underConstructionText}>
                        Under Construction
                    </Text>
                </View>
            </View>
        </Layout>
    );
};

export default memo(UnderConstruction);
