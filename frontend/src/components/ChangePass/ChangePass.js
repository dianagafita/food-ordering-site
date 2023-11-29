import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import Title from "../../components/Title/Title";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

export default function ChangePass() {
  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors },
  } = useForm();

  const { changePassword } = useAuth();

  const submit = (password) => {
    changePassword(password);
  };

  return (
    <div>
      <Title title="Change Password" />
      <form onSubmit={handleSubmit(submit)}>
        <Input
          type="password"
          label="Current password"
          {...register("currentPassword", { required: true })}
          error={errors.currentPassword}
        />
        <Input
          type="password"
          label="New Password"
          {...register("newPassword", { required: true, minLength: 5 })}
          error={errors.newPassword}
        />

        <Input
          type="password"
          label="Confirm Password"
          {...register("confirmNewPassword", {
            required: true,
            validate: (value) =>
              value !== getValues("newPassword")
                ? "Passwords no dot match!"
                : true,
          })}
          error={errors.confirmNewPassword}
          
        />
        <Button
          type="submit"
          text="Change Password"
          backgroundColor="rgb(127, 163, 235)"
        />
      </form>
    </div>
  );
}
