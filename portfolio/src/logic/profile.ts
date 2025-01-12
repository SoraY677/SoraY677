/**
 * 現在の年齢を算出
 * @param birthDate 誕生年月日(YYYY-MM-DD形式想定)
 * @returns {Number}
 */
export const getAge = (birthDate: string) => {
  const t = new Date(),
    b = new Date(birthDate);
  return (
    t.getFullYear() -
    b.getFullYear() -
    (t < new Date(t.getFullYear(), b.getMonth(), b.getDate()) ? 1 : 0)
  );
};
