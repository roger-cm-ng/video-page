export const ACTIONED = 'ACTIONED';
export function action(payload) {
  return {
    type: ACTIONED,
      payload
  };
}
