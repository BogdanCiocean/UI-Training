import {StyleSheet} from 'react-native';
import {metrics} from '../../../core/themes';
import { theme } from '../../../../App';

export const styles =  (theme) => StyleSheet.create({
  container: {
    flex: metrics.size1,
    backgroundColor: theme.colors.accent,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: metrics.size100,
    width: metrics.size140,
  },
  marginTop: {
    marginTop: metrics.size20,
  },
  activityIndicator: {
    height: metrics.size50,
  },
});
